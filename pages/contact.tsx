import { FormEvent, useEffect, useReducer, useState } from "react";

import Input from "@/components/Form/Input";
import TextArea from "@/components/Form/Textarea";

import Container from "../components/Container";

type Action = "update" | "reset";

interface FormAction {
  type: Action;
  payload?: object;
}

interface FormState {
  sent: boolean;
  loading: boolean;
  buttonMessage: string;
  email: {
    value: string;
    error: string;
  };
  fullname: {
    value: string;
    error: string;
  };
  message: {
    value: string;
    error: string;
  };
}

const initialState = {
  sent: false,
  loading: false,
  buttonMessage: "Send Message",
  email: {
    value: "",
    error: "",
  },
  fullname: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

const reducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "update":
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        ...action.payload,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const validate = (name: string, value: string): string => {
  switch (name) {
    case "email":
      if (!value) {
        return "Please enter your email address";
      }
      if (value.length > 320) {
        return "Email address is too long";
      }
      if (
        !value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        return "Please enter a valid email address";
      }
      return "";
    case "fullname":
      if (!value) {
        return "Please enter your name";
      }
      if (value.length < 2) {
        return "Name is too short";
      }
      return "";
    case "message":
      if (!value) {
        return "Please enter a message";
      }
      if (value.length < 10) {
        return "Message is too short";
      }
      return "";
    default:
      return "";
  }
};

const checkFormValidity = (state: FormState): boolean => {
  if (
    state.email.error ||
    state.fullname.error ||
    state.message.error ||
    !state.email.value ||
    !state.fullname.value ||
    !state.message.value
  ) {
    return false;
  }
  return true;
};

const Contact = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formValid, setFormValid] = useState<boolean>(false);

  useEffect(() => {
    const valid = checkFormValidity(state);
    setFormValid(valid);
  }, [state]);

  const updateField = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.currentTarget;
    const error = validate(name, value);
    // update the state
    dispatch({
      type: "update",
      payload: {
        [name]: {
          value,
          error,
        },
      },
    });
  };

  const resetForm = () => {
    dispatch({ type: "reset" });
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    // check if form is sent
    if (state.sent) {
      return;
    }

    // check if form is loading
    if (state.loading) {
      return;
    }

    // set loading
    dispatch({
      type: "update",
      payload: {
        loading: true,
        buttonMessage: "Sending Message",
      },
    });

    // send email
    await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: state.email.value,
        fullname: state.fullname.value,
        message: state.message.value,
        subject: "Contact Form Submission",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((res) => {
      if (res.status === 200) {
        dispatch({
          type: "update",
          payload: {
            buttonMessage: "Message Sent",
            loading: false,
            sent: true,
          },
        });

        setTimeout(() => {
          dispatch({
            type: "reset",
          });
        }, 5000);
      } else {
        dispatch({
          type: "update",
          payload: {
            buttonMessage: "Error Sending Message",
            loading: false,
          },
        });
      }
    });
  };
  return (
    <Container title="Contact">
      <div className="flex flex-col gap-4">
        <h1 className="page-title">Contact</h1>
        <p>
          I&apos;m always looking for new opportunities to help. If you have a
          project in mind, or you just want to chat, I&apos;m always open to
          discussion.
        </p>

        <form onSubmit={(event) => submit(event)} className="mt-4">
          <Input
            name="fullname"
            label="Name"
            value={state.fullname.value}
            error={state.fullname.error}
            type="text"
            placeholder="Your name"
            onChange={(e) => updateField(e)}
          />

          <Input
            name="email"
            label="Email"
            value={state.email.value}
            error={state.email.error}
            type="email"
            placeholder="john.doe@email.com"
            onChange={(e) => updateField(e)}
          />

          <TextArea
            name="message"
            label="Message"
            value={state.message.value}
            error={state.message.error}
            placeholder="Your message"
            onChange={(e) => updateField(e)}
          />

          <button
            type="submit"
            onClick={(e) => submit(e)}
            disabled={!formValid}
            className="inline-flex items-center justify-center rounded-md cursor-pointer border bg-foreground text-background px-3 py-2 text-sm font-medium leading-4 shadow-sm hover:bg-foreground/80 focus:outline-none disabled:cursor-not-allowed disabled:bg-foreground/50 disabled:opacity-70 disabled:shadow-none disabled:text-white"
          >
            <div className="flex gap-2 items-center">
              <span>{state.buttonMessage}</span>
            </div>
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;

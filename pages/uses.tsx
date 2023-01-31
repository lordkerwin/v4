import Container from "../components/Container";

export default function Uses() {
  const uses = [
    {
      title: "Workstation",
      items: [
        {
          title: "Monitor",
          description: '34" Iiyama 144hz UltraWide (3440px x 1440px)',
        },
        {
          title: "Laptop",
          description: "Dell XPS 13 9305 (i7-1165G7, 16GB RAM, 512GB SSD)",
        },
        {
          title: "Keyboard",
          description: "Keychron K2v2 (Cherry MX Blue)",
        },
        {
          title: "Mouse",
          description: "Logitech MX Master 3",
        },
        {
          title: "Headphones",
          description: "Corsair Virtuoso SE",
        },
        {
          title: "Desk",
          description: "IKEA Bekant",
        },
        {
          title: "Chair",
          description: "Secretlab Titan XL",
        },
      ],
    },
    {
      title: "Software",
      items: [
        {
          title: "Editor",
          description: "VS Code & WebStorm",
        },
        {
          title: "Terminal",
          description: "Gnome Terminal",
        },
        {
          title: "Browser",
          description: "Firefox & Chrome",
        },
        {
          title: "OS",
          description: "Fedora 37 (Workstation Edition)",
        },
      ],
    },
    {
      title: "Personal",
      items: [
        {
          title: "Phone",
          description: "iPhone 13 Pro Max",
        },
        {
          title: "Watch",
          description: "Citizen Skyhawk A-T Red Arrows",
        },
        {
          title: "Headphones",
          description: "AirPods Pro",
        },
        {
          title: "Tablet",
          description: "iPad Pro 11 (2020)",
        },
      ],
    },
  ];

  return (
    <Container title="Uses">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="page-title">Uses</h1>
          <p>
            This page contains a list of all the hardware and software I use on
            a daily basis. I update this page whenever I change my setup or find
            a new tool. I try to keep it as up to date as possible.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {uses.map((use) => (
            <div key={use.title}>
              <h2 className="text-2xl font-bold text-blue-500">{use.title}</h2>
              <div className="flex flex-col gap-4 mt-4">
                {use.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col md:flex-row gap-x-2 md:items-center"
                  >
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

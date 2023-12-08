const ContainerApp = ({
  children,
  font,
}: {
  children: React.ReactNode;
  font: string;
}) => {
  return (
    <div
      className={`min-h-screen max-h-full w-screen font-${font}  flex flex-col items-center `}
    >
      {children}
    </div>
  );
};

export default ContainerApp;

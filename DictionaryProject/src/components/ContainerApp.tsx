const ContainerApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary-light-300 h-screen w-screen flex flex-col items-center">
      {children}
    </div>
  );
};

export default ContainerApp;

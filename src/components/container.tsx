type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({children}:ContainerProps) => {
  return (
    <div className="max-w-7xl min-h-screen mx-auto bg-white/[2%] flex flex-col" >{children}</div>
  )
}

export default Container
const Tab = (props: {
    name: string;
    isActiveTab: boolean;
    setActivateTab: Function;
  children?: JSX.Element | JSX.Element[];
}) => {
    return (
        <button className={`flex items-center justify-center transition-all duration-300 --gap-25 rounded-xl ${props.isActiveTab ? 'bg-[#29b6f6] shadow-box-tab shadow-[#29b6f6]' : "bg-[#285f77]/[.2] hover:bg-[#285f77]/[.5] hover:shadow-box-tab-hover"} px-6 py-3`} onClick={()=>props.setActivateTab(props.name)}>
      {props.children}
      <p className="text-base">{props.name}</p>
    </button>
  );
};

export { Tab };

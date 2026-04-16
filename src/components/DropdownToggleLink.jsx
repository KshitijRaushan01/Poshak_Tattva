import Link from "next/link";

const DropdownToggleLink = props => {
  const {
    title,
    className,
    disableToggle,
    ...others
  } = props;
  
  const toggleProps = disableToggle ? {} : { "data-bs-toggle": "dropdown" };

  return (
    <Link 
      href={others.href || "#"} 
      {...toggleProps} 
      className={className || 'dropdown-item dropdown-toggle'} 
      {...others}
    >
      {title}
    </Link>
  );
};

export default DropdownToggleLink;
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  href,
  onClick 
}: ButtonProps) {
  const baseStyles = 'font-semibold transition-all duration-300 rounded-lg';
  
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]}`;
  
  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }
  
  return <button onClick={onClick} className={classes}>{children}</button>;
}

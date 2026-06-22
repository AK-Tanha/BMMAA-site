interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'hero-outline';
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
  const baseStyles = 'font-semibold transition-all duration-300 rounded-lg inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-lg active:scale-[0.98]',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 hover:shadow-glow active:scale-[0.98]',
    outline: 'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-100 active:scale-[0.98]',
    'hero-outline': 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-secondary-500/50 active:scale-[0.98]',
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

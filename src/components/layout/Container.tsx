type ContianerProps = {
    children:  React.ReactNode
} 

export default function Container({ children }: ContianerProps) {
    return(
        <div className="max-w-[1440px] mx-auto px-6 w-full">{children}</div>
    )}

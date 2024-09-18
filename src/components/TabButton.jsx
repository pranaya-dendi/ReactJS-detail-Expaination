export default function TabButton({children, onSelected,...props}){
    return(
        <li>
            <button className={onSelected ? 'active': ''} {...props}>{children}</button>
        </li>
    );
}
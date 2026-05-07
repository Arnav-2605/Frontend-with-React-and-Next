import "./Header_re.css"
export default function Header_re(card)
{
    return(
        <div>
            <card>
                <h4>This is Child</h4>
            </card>
            <nav className="nav">
                <a href="#">Home</a>
                <a href="#">Contact Us</a>
                <a href="#">Next Webpage</a>
            </nav>
        </div>
    )
}
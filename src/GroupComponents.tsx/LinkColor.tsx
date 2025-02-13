import Button from "../Button";
import { Star } from "../icons/Star";



const LinkColor = () => {
    return (
        <div className="flex justify-start content-start items-center">
            <Button variant="link-color" size="M">
                <span>Button CTA</span>
            </Button>
            <Button variant="link-color" size="L">
                <div className="flex items-center gap-2">
                    <Star/>
                    <span>Button CTA</span>
                </div>
            </Button>
            <Button variant="link-color" size="XL">
                <div className="flex items-center gap-2">
                    <span>Button CTA</span>
                    <Star/>
                </div>
            </Button>
            <Button variant="link-color" size="2XL">
                <span>Button CTA</span>
            </Button>
            <Button variant="link-color" size="2XL">
                <Star size="h-6 w-6"/>
            </Button>
        </div>
    )
}

export default LinkColor;
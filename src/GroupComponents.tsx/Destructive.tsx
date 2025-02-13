import Button from "../Button";
import { Star } from "../icons/Star";



const Destructive = () => {
    return (
        <div className="flex justify-start items-center gap-5">
            <Button variant="destructive" size="M">
                <span>Button CTA</span>
            </Button>
            <Button variant="destructive" size="L">
                <div className="flex items-center gap-2">
                    <Star/>
                    <span>Button CTA</span>
                </div>
            </Button>
            <Button variant="destructive" size="XL">
                <div className="flex items-center gap-2">
                    <span>Button CTA</span>
                    <Star/>
                </div>
            </Button>
            <Button variant="destructive" size="2XL">
                <span>Button CTA</span>
            </Button>
            <Button variant="destructive" size="2XL">
                <Star size="h-6 w-6"/>
            </Button>
        </div>
    )
}

export default Destructive;
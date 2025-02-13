import Button from "../Button";
import { Star } from "../icons/Star";



const Tertiary = () => {
    return (
        <div className="flex justify-left items-center gap-5">
            <Button variant="tertiary" size="M">
                <span>Button CTA</span>
            </Button>
            <Button variant="tertiary" size="L">
                <div className="flex items-center gap-2">
                    <Star/>
                    <span>Button CTA</span>
                </div>
            </Button>
            <Button variant="tertiary" size="XL">
                <div className="flex items-center gap-2">
                    <span>Button CTA</span>
                    <Star/>
                </div>
            </Button>
            <Button variant="tertiary" size="2XL">
                <span>Button CTA</span>
            </Button>
            <Button variant="tertiary" size="2XL">
                <Star size="h-6 w-6"/>
            </Button>
        </div>
    )
}

export default Tertiary;
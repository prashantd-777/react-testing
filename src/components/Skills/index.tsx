import {SkillsProps} from "./Skills.types";
import {useEffect, useState} from "react";

const Skills = (props: SkillsProps) => {
    const {skills = []} = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true);
        }, 1001)
    }, [])

    return (
        <>
            <ul>
                {skills.map(item => {
                    return (
                        <li key={item}>{item}</li>
                    )
                })}
            </ul>
            {isLoggedIn ? (
                <button>Start learning</button>
            ): (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </>
    )
}

export default Skills;
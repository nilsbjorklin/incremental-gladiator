import { createContext, useState } from "react";

type WeaponType = 'sword' | 'mace';

const weaponTypes: WeaponType[] = ['sword', 'mace'];
interface Gladiator {
    name: string;
    weapon: WeaponType;
}

export type ContextType = { gladiator: { get: Gladiator, set: (value: Gladiator) => void }, gladiatorExists: { get: boolean, set: (value: boolean) => void } };

export const GladiatorContext = createContext<ContextType | null>(null);

const GladiatorProvider = (props: { children: any }) => {
    const [gladiator, setGladiator] = useState<Gladiator>({ name: '', weapon: 'sword' });
    const [exists, setExists] = useState(false);

    return (
        <GladiatorContext.Provider
            value={{ gladiator: { get: gladiator, set: setGladiator }, gladiatorExists: { get: exists, set: setExists } }}
        >
            {props.children}
        </GladiatorContext.Provider>
    );
};

export default GladiatorProvider;
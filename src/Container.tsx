import { useContext } from "react";
import { ContextType, GladiatorContext } from "./GladiatorContext";

type WeaponType = 'sword' | 'mace';

const weaponTypes: WeaponType[] = ['sword', 'mace'];

function Container() {
    const { gladiator, gladiatorExists } = useContext(GladiatorContext) as ContextType;

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        gladiator.set({ ...gladiator.get, [name]: value });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        gladiator.set({ ...gladiator.get, 'name': gladiator.get.name + ' I' });
        gladiatorExists.set(true);
    }

    return (
        <div className="container normal">
            {gladiatorExists.get && <div className="header">
                <h1>Title</h1>
            </div>}
            <div className="content">
                {gladiatorExists.get ? <div>{gladiator.get.name}</div>
                    : (

                        <form onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input type='text' name='name' value={gladiator.get.name} onChange={handleInputChange} />
                            </label>
                            <br />
                            <label>
                                Weapon:
                                <select defaultValue={gladiator.get.weapon} onChange={(e) => gladiator.set({ ...gladiator.get, 'weapon': (e.target.value as WeaponType) })}>
                                    {weaponTypes.map(weaponType => <option key={weaponType} value={weaponType}>{weaponType}</option>)}
                                </select>
                            </label>
                            <br />
                            <button role='button' type='submit'>Submit</button>
                        </form>)
                }
            </div>
        </div>
    );
}

export default Container;

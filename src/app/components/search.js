export default function Search() {
    return (
        <div className={'bg-white'}>
            <form>
                <select name="">
                    <option value="Comprar"></option>
                    <option value="Alquilar"></option>
                </select>
                <input type="text" name='location'/>
                <select name="type">
                    <option value="Casa"></option>
                    <option value="Apartamento"></option>
                    <option value="Penthouse"></option>
                    <option value="Solar"></option>
                </select>
                
                <label>Adaptado</label>
                <select name="adapt">
                    <option value="Si"></option>
                    <option value="No"></option>
                </select>
                
                <label>Precio</label>
                <input type="text" name="price"/>
            </form>
        </div>
    )
}
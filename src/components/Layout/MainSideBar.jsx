const centro = "Centro de adopción";
const trabaja = "Trabaja con nosotros";
const nombrePerros = "Perros";
const nombreGatos = "Gatos";
const nombreAves = "Aves";
const nombreExoticos = "Exoticos";


   function MainSideBar (){
  return(
       <nav>
<div>
    <ol className="listas">
            <li><a href={`/${nombrePerros}.html`}>{nombrePerros}</a></li>
        <li><a href={`/${nombreGatos}.html`}>{nombreGatos}</a></li>
        <li><a href={`/${nombreAves}.html`}>{nombreAves}</a></li>
        <li><a href={`/${nombreExoticos}.html`}>{nombreExoticos}</a></li>
        <li><a href={`/trabajaconnosotros.html`}>{trabaja}</a></li>
        <li><a href={`/contacto.html`}>{centro}</a></li>
        </ol>
    </div>
</nav>)
}
export default MainSideBar
import './style.css'

document.getElementById('buttonSubmit')!.addEventListener('click',fizetes);

    

function fizetes()
{
  const teljesNev = (document.getElementById('nev')! as HTMLInputElement).value;
    const orszag = (document.getElementById('orszag')! as HTMLInputElement).value;
    const varos = (document.getElementById('varos')! as HTMLInputElement).value;
    const utcaHazszam = (document.getElementById('utcaHazszam')! as HTMLInputElement).value;
    const iranyitoszam = (document.getElementById('iranyitoszam')! as HTMLInputElement).value;
    const bankkartyaSzam = (document.getElementById('bankkartyaSzam')! as HTMLInputElement).value;
    const ellenorzoKod = (document.getElementById('ellenorzoKod')! as HTMLInputElement).value;
    const bankkartyaNev = (document.getElementById('bankkartyaNev')! as HTMLInputElement).value;

    const mintaNev = /^[a-zA-Z]+$/i;
    const mintaOrszag = /^[a-zA-Z]+$/i;
    const mintaVaros = /^[a-zA-Z]+$/i;
    const mintaUtcaHazszam = /^[a-zA-Z0-9\s]+$/i;
    const mintaIranyitoszam = /^[0-9A-Z]+$/;
    const mintaBankkartyaSzam = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;
    const mintaEllenorzoKod = /[0-9]{3}/;
    const mintaBankkartyaNev = /^[a-zA-Z\s]+$/;


    if(mintaNev.test(teljesNev) == false || mintaOrszag.test(orszag) == false || mintaVaros.test(varos) == false || mintaUtcaHazszam.test(utcaHazszam) == false || mintaIranyitoszam.test(iranyitoszam) == false || mintaBankkartyaSzam.test(bankkartyaSzam) == false || mintaEllenorzoKod.test(ellenorzoKod) == false || mintaBankkartyaNev.test(bankkartyaNev) == false)
    {
      document.getElementById('hibaUzenet')!.textContent = "Hibásan töltötte ki az űrlapot!";
      document.getElementById('hibaUzenet')!.style.color = "red";
      /*console.log(mintaNev.test(teljesNev));
      console.log(mintaOrszag.test(orszag));
      console.log(mintaVaros.test(varos));
      console.log(mintaUtcaHazszam.test(utcaHazszam));
      console.log(mintaIranyitoszam.test(iranyitoszam));
      console.log(mintaBankkartyaSzam.test(bankkartyaSzam));
      console.log(mintaEllenorzoKod.test(ellenorzoKod));
      console.log(mintaBankkartyaNev.test(bankkartyaNev));*/
    }
    else
    {
      document.getElementById('table')!.textContent = "";
      document.getElementById('hibaUzenet')!.textContent = "Sikeres fizetés";
      document.getElementById('hibaUzenet')!.style.color = "green";
    }
}
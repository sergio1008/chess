// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

const white_king:string	= "\u2654";
const white_queen:string	= "\u2655";
const white_rook:string	= "\u2656";
const white_bishop:string	= "\u2657";
const white_knight:string	= "\u2658";
const white_pawn:string	= "\u2659";
const black_king:string	= "\u265A";
const black_queen:string	= "\u265B";
const black_rook:string	= "\u265C";
const black_bishop:string	= "\u265D";
const black_knight:string	= "\u265E";
const black_pawn:string	= "\u265F";

class Tablero {
  x: Array<number> = [ 1, 2, 3, 4, 5, 6, 7, 8];
  y: Array<number> = [ 1, 2, 3, 4, 5, 6, 7,8];
  fichaSeleccionada: boolean = false;
  fichaActual:Casilla;
  fichaFutura:Casilla;
  tablero : Array<Casilla> = [];
  constructor(){  
    this.crearTablero();
    this.crearFichas();
    this.cargarFichasATablero();
  }

  crearTablero = () =>{
    appDiv.innerHTML=`<div id="tablero"></div>`;
    let tabla = document.getElementById('tablero');
    for(let i = 0 ; i < 8; i++ ){
      for(let e = 0 ; e < 8; e++ ){
        let clase = "caja" + i + e;
        let casilla:Casilla={
          cordenada :[i,e],
          ficha : "",
          color:"",
          clase: clase          
        }

        this.tablero.push(casilla);
        let caja = document.createElement('div');
        caja.id =clase;
        if((this.x[i]+ this.y[e])% 2 == 0){         
          caja.classList.add("caja");          
          caja.classList.add("negra");
          tabla.appendChild(caja);
        }else {
          caja.classList.add("caja");
          caja.classList.add("blanca")
          tabla.appendChild(caja);
        }
      }    
    }
  }
  /**
   * Metodo para crear las fichas
   */
  crearFichas = () =>{
      for(let i = 0 ; i < 8; i++ ){
        if(i == 0){
          let t1 = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == 0);
          this.tablero[t1].ficha = white_rook;
          this.tablero[t1].color = "white";
          let c1 = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == 1);
          this.tablero[c1].ficha = white_knight;
          this.tablero[c1].color = "white";
          let a1 = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == 2);
          this.tablero[a1].ficha = white_bishop;
          this.tablero[a1].color = "white";
          let q = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == 3);
          this.tablero[q].ficha = white_queen;  
          this.tablero[q].color = "white";   
          let k = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == 4);
          this.tablero[k].ficha = white_king;  
          this.tablero[k].color = "white";
          let a2 = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == 5);
          this.tablero[a2].ficha = white_bishop;
          this.tablero[a2].color = "white";
          let c2 = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == 6);
          this.tablero[c2].ficha = white_knight;
          this.tablero[c2].color = "white";
          let t2 = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == 7);
          this.tablero[t2].ficha = white_rook; 
          this.tablero[t2].color = "white";
        }
        if(i == 1){
          for(let e = 0 ; e < 8; e++ ){
             let cj = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == e);
             this.tablero[cj].ficha = white_pawn;
             this.tablero[cj].color = "white";
          }
        }
        if(i == 6){
          for(let e = 0 ; e < 8; e++ ){
             let cj = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == e);
             this.tablero[cj].ficha = black_pawn;
             this.tablero[cj].color = "black";

          }
        }
        if(i == 7){
          let t1 = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == 0);
          this.tablero[t1].ficha = black_rook;
          this.tablero[t1].color = "black";
          let c1 = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == 1);
          this.tablero[c1].ficha = black_knight;
          this.tablero[c1].color = "black";
          let a1 = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == 2);
          this.tablero[a1].ficha = black_bishop;
          this.tablero[a1].color = "black";
          let q = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == 3);
          this.tablero[q].ficha = black_queen;
          this.tablero[q].color = "black";               
          let k = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == 4);
          this.tablero[k].ficha = black_king; 
          this.tablero[k].color = "black"; 
          let a2 = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == 5);
          this.tablero[a2].ficha = black_bishop;
          this.tablero[a2].color = "black";
          let c2 = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == 6);
          this.tablero[c2].ficha = black_knight;
          this.tablero[c2].color = "black";
          let t2 = this.tablero.findIndex(caj => caj.cordenada[0] == i && caj.cordenada[1] == 7);
          this.tablero[t2].ficha = black_rook; 
          this.tablero[t2].color = "black";
        }
      }

  }

/**
 * Metodo para colocar las fichas en el tablero
 */
  cargarFichasATablero=()=>{
    debugger;
  
    this.tablero.forEach(caja => {
      let c = document.getElementById(caja.clase);
      c.innerHTML = "";

      let span = document.createElement('span');
      span.innerText = caja.ficha;
      span.classList.add(caja.clase);
      let event = new CustomEvent('selectFicha', { detail: span});
      span.addEventListener("selectFicha", this.fichaTomada , false);
      span.addEventListener("click", (e) =>{
        span.dispatchEvent(event);
      });      
      c.appendChild(span);
    });
  }

  /**
   * Metodo que indica cuando hubo una jugada
   */
fichaTomada =  (e) =>{
  let span: HTMLElement = e.detail;

  
  if(span.innerHTML != ""){
    if(!this.fichaSeleccionada){
    span.style.border = "yellow solid 2px";
    span.style.boxSizing="border-box"
    this.fichaSeleccionada = true;
    let ficha = this.tablero.findIndex(cj => cj.clase == span.className);
    this.fichaActual = this.tablero[ficha];
    }else{
    let ficha = this.tablero.findIndex(cj => cj.clase == span.className);
    this.fichaFutura = this.tablero[ficha];
      this.jugada();
    }
  }else{
    let ficha = this.tablero.findIndex(cj => cj.clase == span.className);
    this.fichaFutura = this.tablero[ficha];
    this.jugada();
  }
}

/**
 * Metodo que hace la jugada
 */
  jugada =() =>{
    if(this.fichaSeleccionada){
      let index = this.tablero.findIndex(tb =>tb.cordenada == this.fichaActual.cordenada);
      let nueva = this.tablero.findIndex(tb => tb.cordenada == this.fichaFutura.cordenada);
      if(this.tablero[nueva].color != this.tablero[index].color){
        this.tablero[nueva].color = this.tablero[index].color;
        this.tablero[nueva].ficha = this.tablero[index].ficha;
        this.tablero[index].color = "";
        this.tablero[index].ficha = "";
      } else {
        let ficha = this.tablero[nueva].ficha;
        this.tablero[nueva].ficha = this.tablero[index].ficha;
        this.tablero[index].ficha = ficha;
      }
      this.cargarFichasATablero();
      this.fichaSeleccionada = false;
    } 

  }
}


interface Casilla{
  cordenada:Array<number>;
  ficha:string;
  color:string;
  clase:string
}

const ajedrez = new Tablero();
















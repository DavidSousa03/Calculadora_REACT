import "./Calculadora.css"
import cifrao from "../images/cifrao.png"
import pessoa from "../images/pessoa.png"
export function Calculadora(){
    return(
        <main>
        <form action="">
            <div className="bill">
                <label htmlFor="">Conta</label>
                <div className="input-box">
                    <img src={cifrao} alt="cifrao" />
                    <input type="number" id="Bill" placeholder="0"/>
                </div>
            </div>
            
            <div className="tip-percentage">
                <label htmlFor="">Selecione a Porcentagem %</label>
                <div>
                    <input type="button" value="5%" />
                    <input type="button" value="10%" />
                    <input type="button" value="15%" />
                    <input type="button" value="25%" />
                    <input type="button" value="50%" />
                    <input type="number" id="custom" placeholder="Outra" />
                </div>
            </div>

            <div className="people">
                <label htmlFor="">Numero de Pessoas</label>
                <div className="input-box">
                    <img src={pessoa} alt="pessoa" />
                    <input type="number" id="people-number" placeholder="0" />
                </div>
            </div>
        </form>
        <section  className="results">
            <div>
                <div className="tip-amount">
                    <p>Gorjeta <br />
                    <span>/pessoa</span></p>
                    <p>R$ 0.00</p>
                </div>
                <div className="total">
                    <p>Total <br />
                    <span>/pessoa. </span></p>
                    <p>R$ 0.00</p>
                </div>
                <button>Limpar</button>
            </div>
        </section>
        </main>
        
        

    )
}
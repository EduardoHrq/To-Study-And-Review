package strategy;

public class Robo {
  
  private Comportamento strategia;

  public void setEstrategia(Comportamento comp) {
    this.strategia = comp;
  }

  public void mover() {
    strategia.mover();
  }

}

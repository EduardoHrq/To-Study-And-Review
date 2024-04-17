package singleton;

public class FastSingleton {
  
  private static FastSingleton instancia = new FastSingleton();

  /**
   * O que irá garantir uma unica instancia, construtor privado
   */
  private FastSingleton(){
    super();
  }

  public static FastSingleton getInstancia() {
    return instancia;
  }

}

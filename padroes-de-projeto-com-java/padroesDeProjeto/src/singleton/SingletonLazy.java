package singleton;

public class SingletonLazy {

  private static SingletonLazy instancia;

  /**
   * O que irá garantir uma unica instancia, construtor privado
   */
  private SingletonLazy(){
    super();
  }

  public static SingletonLazy getInstancia() {
    if(instancia == null) {
      instancia = new SingletonLazy();
    }
    return instancia;
  }


}
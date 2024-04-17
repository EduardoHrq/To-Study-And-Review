package singleton;

public class HoldedSingleton {

  private static class InstanceHolder {
    public static HoldedSingleton instancia = new HoldedSingleton();
  }

  private HoldedSingleton() {
		super();
	}

  public static HoldedSingleton getInstancia() {
    return InstanceHolder.instancia;
  }

}
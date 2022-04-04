//Example "Incorrect interface implementation ‘A’ --> 'C'".


// Creating an interface
interface A {
    display(): void;
  }
    
  //Implementating A to B
  class B implements A {
    display() {
      console.log("B");
    }
  }
    
  class C implements A {
    
    //  Throws error: Property 'display' is missing in type 'C' but required in type 'A'.
    Display() {
      console.log("C");
    }
  }


//Another Example
  interface Pingable {
    ping(): void;
  }
   
  class Sonar implements Pingable {
    ping() {
      console.log("ping!");
    }
  }
   
  class Ball implements Pingable {
    
    // Property 'ping' is missing in type 'Ball' but required in type 'Pingable'. //

    pong() {
      console.log("pong!");
    }
  }
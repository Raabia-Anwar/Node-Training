/* IMplement Clause 
interface Checkable {
    check(name: string): boolean;
  }
   
  class NameChecker implements Checkable {
    check(s) {
  //Parameter 's' implicitly has an 'any' type.
  
      // Notice no error here
      return s.toLowercse() === "ok";
                   
    }
  }
  */
  
  
  /* Overridding
  declare class Base {
    greet(): void;
  }
  declare class Derived extends Base {}
  // ---cut---
  const b: Base = new Derived();
  // Crashes because "name" will be undefined
  b.greet();
  */

  class Base {
    greet() {
      console.log("Hello, world!");
    }
  }
   
  class Derived extends Base {
    // Make this parameter required
    greet(name: string) {
  /*Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'.
    Type '(name: string) => void' is not assignable to type '() => void'. */
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }

  const b: Base = new Derived();
// Crashes because "name" will be undefined
b.greet();
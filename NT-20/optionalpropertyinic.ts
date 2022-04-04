interface A {
  x: number;
  y?: number; //optional property
}
class C implements A {
  x = 0;
}
const c = new C();
c.y = 10;
//Property 'y' does not exist on type 'C'.
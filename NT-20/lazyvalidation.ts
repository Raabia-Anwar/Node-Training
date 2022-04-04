class Box<T> {
  value?: T;
 
  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}
 
const box = new Box();
box.value = "Gameboy";
 
box.value;
if (box.hasValue()) {
  box.value;
}
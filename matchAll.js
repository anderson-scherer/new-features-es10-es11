/**
 * String.matchAll
 */

const string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut tristique semper rutrum. Aliquam mattis sit amet lectus sed pretium.
  Aliquam at lamet neque, ut ultrices libero. Etiam sollicitudin eget tamet nec elementum. Curabitur sagittis a wamet ut lacinia`;

const regex = /\w?amet/g;

for (const def of string.matchAll(regex)) {
  console.log(def);
}



const { MarkovMachine, makeText, choice, makeChains } = require('./markov');

describe('MarkovMachine', () => {
  describe('constructor', () => {
    it('should split the input text into an array of words', () => {
      const text = 'hello world';
      const machine = new MarkovMachine(text);
      expect(machine.words).toEqual(['hello', 'world']);
    });

    it('should remove empty strings from the array of words', () => {
      const text = '   hello   world   ';
      const machine = new MarkovMachine(text);
      expect(machine.words).toEqual(['hello', 'world']);
    });
  });



  describe('makeText', () => {
    it('should generate random text from the Markov chains that includes the word "hat"', () => {
      const text = 'the cat in the hat';
      const machine = new MarkovMachine(text);
      const result = machine.makeText();
      expect(result.split(' ')).toContain("cat");
    });

    it('should generate random text with a specified number of words including "cat"', () => {
      const text = 'the cat in the hat';
      const machine = new MarkovMachine(text);
      const result = machine.makeText(5);
      expect(result.split(' ')).toContain("cat");
    });
  });
});

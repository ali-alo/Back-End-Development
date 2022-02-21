// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, dnaArr) => {
  return {
    specimenNum: num,
    dna: dnaArr,
    mutate() {
      const randomDnaIndex = Math.floor(Math.random() * this.dna.length);
      const currentDna = this.dna[randomDnaIndex];
      let newDna = currentDna;

      while(newDna === currentDna)
      newDna = returnRandBase();

      this.dna[randomDnaIndex] = newDna;
      return this.dna;
     },
     compareDNA(pAequor) {
       let count = 0;
       let countA = 0;
       let countT = 0;
       let countG = 0;
       let countC = 0;

       for(let i = 0; i < this.dna.length; i++) {
        if(this.dna[i] === pAequor.dna[i]){
          count++;
          if(this.dna[i] === "A") countA++;
          else if(this.dna[i] === "T") countT++;
          else if(this.dna[i] === "G") countG++;
          else if(this.dna[i] === "C") countC++;
        }
      }
      let dnaWinner = "C";
      const max = Math.max(countA, countT, countG, countC);
      if(max === countA) dnaWinner = "A";
      else if(max === countT) dnaWinner = "T";
      else if(max === countG) dnaWinner = "G";
      console.log(`specimen #${this.specimenNum} and speciemn #${pAequor.specimenNum} have ${count / 15 * 100}% DNA in common.
                   The most related instance is ${dnaWinner}`);
     },
     willLikelySurvive() {
       let count = 0;
       this.dna.forEach(dna => {
         if(dna === 'C' || dna === 'G')
          count++
       })
       if(count / this.dna.length >= 0.6)
        return true;
      return false;
     },
     complementStrand() {
       const complementDNA = [];
       this.dna.forEach(dna => {
         let complementBase = "A"
         switch(dna) {
           case "A":
             complementBase = "T";
             break;
            case "C":
              complementBase = "G";
              break;
            case "G":
              complementBase = "C";
              break;
         }
         complementDNA.push(complementBase);
       })
       return complementDNA;
     }
  }
}


const arrpAequor = [];
for(let i = 1; i <=30; i++) {
  let pAequor = pAequorFactory(i, mockUpStrand());
  while(!pAequor.willLikelySurvive())
    pAequor = pAequorFactory(i, mockUpStrand());
  arrpAequor.push(pAequor);

}

const test = pAequorFactory(99, mockUpStrand());
const test2 = pAequorFactory(100, mockUpStrand());
console.log(test, test2);
test.compareDNA(test2);








const keyTrainer = {

    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: null,

    task: [],

    setCharCount() {
        do {
            const charCount = prompt('ведите число')
            if (charCount === null) break;
            const charNumber = parseInt(charCount);
            const check = this.checkPositiveInteger(charNumber);
            if (check) {
                this.charCount = charCount;
                break;
            } else {
                continue;
            }
        } while (true)
    },


    checkPositiveInteger(num) {
        return isNaN(num) || num < 0 ?
            false :
            true;

    },

    createTask() {
        for (let i = 0; i < this.charCount; i++) {
            const randNum = Math.floor((Math.random() * this.chars.length));
            this.task.push(this.chars[randNum]);
        }
    },

    startTask() {
        const taskStr = this.task.join('');
        let str = prompt(`Enter this text: '${taskStr}'`)
        this.userInput = str;
        this.userErrors = 0;
        for (let i = 0; i < taskStr.length; i++) {
            if (taskStr[i] !== this.userInput[i]) {
                this.userErrors++;
            }
        }
        this.userErrors === 0 ?
            alert('E Boy!') :
            alert(`you did ${this.userErrors} mistake(s)`);

    },
    run() {
        this.setCharCount();
        if (!this.charCount) return;
        this.createTask();
        this.startTask();
    }
}

keyTrainer.run();

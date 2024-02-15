function solution(action) {

    if (action == 'upvote'){
        this.upvotes += 1;
    }

    if (action == 'downvote'){
        this.downvotes += 1;
    }

    if (action == 'score'){
        let totalScore = this.upvotes - this.downvotes;
        let totalVotes = this.upvotes + this.downvotes;
        let rating = 'new';
        let percentage = (this.upvotes / totalVotes) * 100;

        if (percentage > 66) {
            rating = 'hot';
        } 
       
        if (percentage <= 66 && totalScore >= 0 && totalVotes > 100) {
                rating = 'controversial';
        }

        if (totalScore < 0) {
            rating = 'unpopular';
        }

        if (totalVotes < 10) {
            rating = 'new';
        }

        if ((this.upvotes + this.downvotes) > 50) {
           let addVotes = this.upvotes > this.downvotes ? Math.ceil(this.upvotes * 0.25) : Math.ceil(this.downvotes * 0.25);
           return [this.upvotes + addVotes, this.downvotes + addVotes, totalScore, rating];
        }
        else {
            return [this.upvotes, this.downvotes, totalScore, rating];
        }
    } 

}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 1,
    downvotes: 1
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');
console.log(score); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);
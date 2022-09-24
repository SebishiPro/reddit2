export class Article{
  
  title: string;
  link: string;
  votes: number;
  constructor(title: string, link: string, votes?: number){

    this.link = link;
    this.title = title;
    this.votes = votes || 0;

  }

  voteUp(): void{
    this.votes +=1;
  }

  voteDown(): void{
    this.votes -=1;
  }

  domain(): string{
    try{
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    }catch(err){
      return "";
    }
    
  }

}




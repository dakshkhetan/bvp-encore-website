import React from 'react';

const Rs = () => <span className='rupee-symbol'>₹</span>;

export const eventsList = [
  // {
  //   code: 'das-1',
  //   name: 'Bizzare Photography'
  // },
  {
    code: 'das-1',
    name: 'Lockdown Photojournalism'
  },
  {
    code: 'das-2',
    name: 'Macro Photography'
  },
  {
    code: 'das-3',
    name: 'Light Painting'
  },
  {
    code: 'das-4',
    name: 'Your Best Shot'
  },
  {
    code: 'enactus-1',
    name: 'Case Vista'
  },
  {
    code: 'acm-1',
    name: 'Think and Grow Rich'
  },
  {
    code: 'acm-2',
    name: 'Meme Wars'
  },
  {
    code: 'acm-3',
    name: 'Video Editing'
  },
  {
    code: 'edc-1',
    name: 'Auction Ideathon'
  },
  {
    code: 'edc-2',
    name: 'Binge Mania'
  },
  {
    code: 'edc-3',
    name: 'Business Quiz'
  },
  {
    code: 'aura-1',
    name: 'Solo Dance Competition'
  },
  {
    code: 'isa-1',
    name: 'Technical Ideathon'
  },
  {
    code: 'aagaaz-1',
    name: 'Music Trivia'
  },
  {
    code: 'csi-1',
    name: 'Quizzing Event'
  }
];

export const events = {
  das: [
    {
      code: 'das-1',
      name: 'Lockdown Photojournalism',
      date: '3rd October',
      team: '1 member',
      prize: (
        <span className='prize-money'>
          <span className='underline'>{Rs()} 200 (1st Prize)</span>
          <br />
          <span className='underline'>{Rs()} 100 (2nd Prize)</span>
        </span>
      ),
      registrationFee: 'FREE',
      organisingSociety: 'DAS',
      registrationLink:
        'https://commudle.com/communities/encore-2020/events/lockdown-photojournalism',
      poster: require('../assets/events/lockdown-photojournalism.jpeg'),
      description: (
        <div>
          <p>
            Photographers are always creative with one's shots, so one can also
            be creative in writing about it. Photojournalism employs images to
            tell a news story.
            <br />
            Click a photo depicting lockdown in India and write an article up to
            150 words with your clicked shot as your theme.
          </p>
          <div className='expand'>
            <p>
              <b>Entry Submission: 3rd October</b>
            </p>
            <ul>
              <li>Picture resolution should be greater than 1280 X 720 p.</li>
              <li>Size should be greater than 2 MB.</li>
              <li>Shot clicked in 2020 would be considered a valid entry.</li>
              <li>Your shot should be original.</li>
              <li>No screenshots are allowed.</li>
              <li>Photo should be creative.</li>
              <li>Article should not exceed 150 words.</li>
              <li>
                Judging will be done based on the photo as well as the article
                so the article should be grammatically sound and should have a
                proper opening and ending.
              </li>
              <li>
                Light editing is allowed (colour correction, cropping only).
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      code: 'das-2',
      name: 'Macro Photography',
      date: '3rd October',
      team: '1 member',
      prize: (
        <span className='prize-money'>
          <span className='underline'>{Rs()} 200 (1st Prize)</span>
          <br />
          <span className='underline'>{Rs()} 100 (2nd Prize)</span>
        </span>
      ),
      registrationFee: 'FREE',
      organisingSociety: 'DAS',
      registrationLink:
        'https://commudle.com/communities/encore-2020/events/macro-photography',
      poster: require('../assets/events/macro-photography.jpeg'),
      description: (
        <div>
          <p>
            If you like taking extreme close-up photography, usually of very
            small subjects or living organisms like insects then this theme is
            just for you.
          </p>
          <p>
            <b>Entry Submission: 3rd October</b>
          </p>
          <ul>
            <li>Picture resolution should be greater than 1280 X 720 p.</li>
            <li>Size should be greater than 2 MB.</li>
            <li>Shot clicked in 2020 would be considered a valid entry.</li>
            <li>Your shot should be original.</li>
            <li>No screenshots are allowed.</li>
            <li>
              Light editing is allowed (colour correction, cropping only).
            </li>
            <li>Extra points for providing behind the scenes video.</li>
            <li>Idea should be innovative.</li>
          </ul>
        </div>
      )
    },
    {
      code: 'das-3',
      name: 'Light Painting',
      date: '3rd October',
      team: '1 member',
      prize: (
        <span className='prize-money'>
          <span className='underline'>{Rs()} 200 (1st Prize)</span>
          <br />
          <span className='underline'>{Rs()} 100 (2nd Prize)</span>
        </span>
      ),
      registrationFee: 'FREE',
      organisingSociety: 'DAS',
      registrationLink:
        'https://commudle.com/communities/encore-2020/events/light-painting',
      poster: require('../assets/events/placeholder.png'),
      description: (
        <div>
          <p>
            <em>
              Let the world be your canvas <br />
              Aura be the colours <br />
              To bring a scene to life but painting it with a beam of light.
            </em>
          </p>
          <p>
            It's a technique of moving a light source by taking a long exposure
            of the object.
          </p>
          <p>
            <b>Entry Submission: 3rd October</b>
          </p>
          <ul>
            <li>Picture resolution should be greater than 1280 X 720 p.</li>
            <li>Size should be greater than 2 MB.</li>
            <li>Shot clicked in 2020 would be considered a valid entry.</li>
            <li>Your shot should be original.</li>
            <li>No screenshots are allowed.</li>
            <li>Product should be visible.</li>
            <li>
              Light editing is allowed (colour correction, cropping only).
            </li>
            <li>Extra points for providing behind the scenes video.</li>
          </ul>
        </div>
      )
    },
    {
      code: 'das-4',
      name: 'Your Best Shot',
      date: '3rd October',
      team: '1 member',
      prize: (
        <span className='prize-money'>
          <span className='underline'>{Rs()} 200 (1st Prize)</span>
          <br />
          <span className='underline'>{Rs()} 100 (2nd Prize)</span>
        </span>
      ),
      registrationFee: 'FREE',
      organisingSociety: 'DAS',
      registrationLink:
        'https://commudle.com/communities/encore-2020/events/your-best-shot',
      poster: require('../assets/events/your-best-shot.jpeg'),
      description: (
        <div>
          <p>
            Each of us has a shot clicked just at the right moment and edited
            just the way you like it. Send us your best shot yet as an entry
            which tells what type of photographer you are.
          </p>
          <p>
            <b>Entry Submission: 3rd October</b>
          </p>
          <ul>
            <li>Picture resolution should be greater than 1280 X 720 p.</li>
            <li>Size should be greater than 2 MB.</li>
            <li>Shot clicked in 2020 would be considered a valid entry.</li>
            <li>Your shot should be original.</li>
            <li>No screenshots are allowed.</li>
            <li>No restrictions on editing.</li>
            <li>
              Top 10 shots out of all would be featured on our story and the
              best out of all which would be selected by the audience would be
              awarded.
            </li>
            <li>
              Light editing is allowed (colour correction, cropping only).
            </li>
            <li>Each like comment and share will be counted.</li>
          </ul>
        </div>
      )
    }
  ],
  enactus: [
    {
      code: 'enactus-1',
      name: 'Case-Vista',
      date: '3rd October',
      team: '3-5 members',
      prize: <>{Rs()} 2000</>,
      registrationFee: 'FREE',
      organisingSociety: 'Enactus',
      registrationLink:
        'https://commudle.com/communities/encore-2020/events/case-challenge',
      poster: require('../assets/events/case-vista.jpeg'),
      description: (
        <p>
          Enactus BVCOE is planning to conduct a 'Case-Vista', wherein
          students of various colleges and other Enactus teams can showcase
          their analytical skills and entrepreneurial abilities. The case study
          will entail a real-life situation, the solutions of which shall be
          presented by the different teams. The preliminary round will help us
          find the best teams, who will then be judged based on their skills in
          the second round.
        </p>
      )
    }
  ],
  acm: [
    {
      code: 'acm-1',
      name: 'Think and Grow Rich',
      date: '3rd & 4th October',
      team: '4 members',
      prize: 'TBD',
      registrationFee: 'TBD',
      organisingSociety: 'ACM',
      registrationLink:
        'https://commudle.com/communities/encore-2020/events/think-and-grow-rich',
      poster: require('../assets/events/think-grow-rich.jpeg'),
      description: (
        <p>
          Each team will be given a hypothetical scenario and some fixed amount
          of hypothetical money and they’ll have to think, innovate and
          implement their skills in marketing and business to devise a lucrative
          and feasible business model within a specified amount of time.
        </p>
      )
    },
    {
      code: 'acm-2',
      name: 'Meme Wars',
      date: '3rd October',
      team: '1 member',
      prize: 'TBD',
      registrationFee: 'TBD',
      organisingSociety: 'ACM',
      registrationLink:
        'https://commudle.com/communities/encore-2020/events/meme-making',
      poster: require('../assets/events/meme-wars.jpeg'),
      description: (
        <p>
          Each team will have to work to come up with a meme either by making
          their own original meme template or by using an existing one within a
          specified period. The meme that clearly expresses the theme will be
          the winner.
        </p>
      )
    },
    {
      code: 'acm-3',
      name: 'Video Editing',
      date: '4th October',
      team: '3 members',
      prize: 'TBD',
      registrationFee: 'TBD',
      organisingSociety: 'ACM',
      registrationLink:
        'https://commudle.com/communities/encore-2020/events/3-video-editing',
      poster: require('../assets/events/placeholder.png'),
      description: (
        <p>
          Each team must put together a short trailer for a Netflix show/movie
          within a specified amount of time. The genre will be provided on the
          spot. The team that creates most intriguing, imaginative and original
          trailer will be the winner.
        </p>
      )
    }
  ],
  edc: [
    {
      code: 'edc-1',
      name: 'Auction Ideathon',
      date: '3rd & 4th October',
      team: '1-3 members',
      prize: 'TBD',
      registrationFee: <>{Rs()} 50</>,
      organisingSociety: 'EDC',
      registrationLink:
        'https://commudle.com/communities/encore-2020/events/1-auction-ideathon',
      poster: require('../assets/events/auction-ideathon.jpeg'),
      description: (
        <p>
          In this event, the students would face preliminary quizzing round in
          which each team will earn virtual money based on every right answer
          and then in the next round they will have to buy a minimum of 2
          companies in the auction with different base values and of depending
          on companies. The final day each team must submit a document before
          their presentation on the meet. They must formulate an idea for the
          company based on the theme given.
        </p>
      )
    },
    {
      code: 'edc-2',
      name: 'Binge Mania',
      date: '3rd October',
      team: '1 member',
      prize: 'TBD',
      registrationFee: <>{Rs()} 30</>,
      organisingSociety: 'EDC',
      registrationLink:
        'https://commudle.com/communities/encore-2020/events/web-series-quiz',
      poster: require('../assets/events/binge-mania.jpeg'),
      description: (
        <p>
          In this event, the participants would have to choose the right answer
          in each time frame. The top three rank holder would get the prizes.
        </p>
      )
    },
    {
      code: 'edc-3',
      name: 'Business Quiz',
      date: '4th October',
      team: '1-2 members',
      prize: 'TBD',
      registrationFee: <>{Rs()} 30</>,
      organisingSociety: 'EDC',
      registrationLink:
        'https://commudle.com/communities/encore-2020/events/business-quiz',
      poster: require('../assets/events/business-quiz.jpeg'),
      description: (
        <p>
          The team would have to guess the company name based on the clue
          (pictures, taglines, news) given within a given time frame. The top
          three rank holders would get the prize.
        </p>
      )
    }
  ],
  aura: [
    {
      code: 'aura-1',
      name: 'RANGMANCH (Solo Dance Competition)',
      date: '3rd October',
      team: '1 member',
      prize: <>{Rs()} 2000</>,
      registrationFee: <>{Rs()} 50</>,
      organisingSociety: 'AURA',
      registrationLink:
        'https://commudle.com/communities/encore-2020/events/solo-dance',
      poster: require('../assets/events/rangmanch.jpeg'),
      description: (
        <div>
          <p className='sub-heading'>
            <em>Guidelines:</em>
          </p>
          <ul>
            <li>
              The registration starts at 20th September 2020. The last date to
              register is 26th September 2020. The registration fee is Rs 50.
            </li>
            <li>
              Following <b>@aura_dancecrew</b> on Instagram is mandatory. Your
              entries will not be considered if the page is not followed.
            </li>
            <li>
              The videos can be uploaded from 20th to 26th September (11 pm).
            </li>
          </ul>
          <p className='sub-heading'>
            <em>Round 1:</em>
          </p>
          <ul>
            <li>
              Participants shall upload a 1 minute (max) dance video on any song
              and post it on their Instagram account, tag <b>@aura_dancecrew</b>{' '}
              and use <b>#encore2020</b> in their posts.
            </li>
            <li>6 participants will be shortlisted from this round.</li>
          </ul>
          <p className='sub-heading'>
            <em>Round 2:</em>
          </p>
          <ul>
            <li>
              Top 6 selected participants will be given an opponent to battle
              with (3 battles, 3 finalists).
            </li>
            <li>
              The winner will be selected from these 3 finalists by the judge.
            </li>
            <li>Stay tuned to our page for further updates.</li>
          </ul>
        </div>
      )
    }
  ],
  isa: [
    {
      code: 'isa-1',
      name: 'Technical Ideathon',
      date: '3rd October',
      team: '3-4 members',
      prize: (
        <span className='prize-money'>
          <span className='underline'>{Rs()} 1500 (1st Prize)</span>
          <br />
          <span className='underline'>{Rs()} 1000 (2nd Prize)</span>
          <br />
          <span className='underline'>{Rs()} 500 (3rd Prize)</span>
        </span>
      ),
      registrationFee: 'TBD',
      organisingSociety: 'ISA',
      registrationLink:
        'https://commudle.com/communities/encore-2020/events/technical-ideathon',
      poster: require('../assets/events/placeholder.png'),
      description: (
        <p>
          There will be 3-4 rounds in which the teams would be given a theme for
          a round (i.e. health, lifestyle etc.) and the time limit will of 3
          hours. In this time the members can think of an innovative idea and
          must prepare a PPT for the same. They also can present some additional
          things like simulation (for hardware) or a prototype for their idea.
          Every round will be judged and some teams will be eliminated after
          each round and the others (selected ones) would qualify for the next
          round.
        </p>
      )
    }
  ],
  aagaaz: [
    {
      code: 'aagaaz-1',
      name: 'Music Trivia',
      date: '3rd & 4th October',
      team: '1-3 members',
      prize: <>{Rs()} 500</>,
      registrationFee: <>{Rs()} 30</>,
      organisingSociety: 'AAGAAZ',
      registrationLink:
        'https://commudle.com/communities/encore-2020/events/music-trivia',
      poster: require('../assets/events/music-trivia.jpeg'),
      description: (
        <p>
          Want to prove you have the best taste in music to your friends while
          also practicing social distancing? All you need to do is (virtually)
          gather your friends and participate in this wonderful music trivia
          presented by AAGAAZ (The Music Society of Bharati Vidyapeeth College
          of Engineering). It will include{' '}
          <b>questions on songs/music videos/albums</b> and the quiz will be
          separated in rounds like{' '}
          <b>guess the song, complete the lyrics & rapid fire</b>. People can
          choose from the categories (like Hollywood, Bollywood, etc.) and can
          participate in teams as well.
        </p>
      )
    }
  ],
  bvpcsi: [
    {
      code: 'csi-1',
      name: 'Quizzing Event',
      date: '3rd October',
      team: '1-3 members',
      prize: 'TBD',
      registrationFee: 'TBD',
      organisingSociety: 'BVPCSI',
      registrationLink:
        'https://commudle.com/communities/encore-2020/events/quizzing-event',
      poster: require('../assets/events/placeholder.png'),
      description: (
        <p>
          For all the enthusiastic quizzers out there, we will organise a fun
          and interesting quiz based on a variety of topics. People can
          participate individually or in groups of 2 or 3 members.
        </p>
      )
    }
  ]
};

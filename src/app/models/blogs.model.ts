export interface BlogPost {
  title: string;
  content: string;
  date?: Date;
  url: string;
  tags: string[];
}

export const Posts: readonly BlogPost[] = [
  {
    title: 'Learning Never Stops: The Quiet Struggle of a Software Engineer',
    content:
      'A thoughtful reflection on continuous learning and growth in software engineering.',
    date: new Date('2025-05-02T00:00:00'),
    url: 'https://medium.rameessahlu.com/ive-been-thinking-about-this-lately-do-we-ever-stop-studying-as-software-engineers-55dc682d9f31',
    tags: ['Software Engineering', 'Learning', 'Career'],
  },
  {
    title: 'SceneNavigator: Make Custom Chapters for Any Video in VLC',
    content: 'Creating custom video chapters in VLC with SceneNavigator.',
    url: 'https://medium.rameessahlu.com/scenenavigator-make-custom-chapters-for-any-video-in-vlc-05866b9d1c61',
    tags: ['Software Engineering', 'VLC', 'Video Tools'],
  },
];

import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {PostService} from './post.service';

describe('PostService', () => {
  let httpTestingController: HttpTestingController;
  let postService: PostService;
  const mockData = [{
    userId: 12,
    id: 1,
    title: 'title1',
    body: 'post content one',
  },
    {
    userId: 24,
    id: 2,
    title: 'title2',
    body: 'post content two',
  }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    postService = TestBed.inject(PostService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should call API and return array of Posts', () => {
    postService.getPosts().subscribe( posts => {
      expect(posts).toBeTruthy();
      expect(posts[0].body).toBe('post content one');
      expect(posts[1].title).toBe('title2');
    });
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});

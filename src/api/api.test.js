import APIfetchMovies from '.';

describe('Api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('return data on success', () => {
    // Arrange
    const movies = {
      movies: [
        { id: 'movie_1', title: 'Title movie one' },
        { id: 'movie_2', title: 'Title movie two' },
      ],
    };
    fetch.mockResponse(JSON.stringify(movies));
    // Act
    APIfetchMovies().then((res) => {
      // Assert
      expect(res).toEqual(movies);
    });
    // Assert
    expect(fetch.mock.calls.length).toEqual(1);
  });

  it('return an error on failure', () => {
    // Arrange
    const error = 'Unsuccessful request';
    fetch.mockReject(new Error(error));
    // Act
    APIfetchMovies().catch((err) => {
      // Assert
      expect(err.message).toEqual(error);
    });
    expect(fetch.mock.calls.length).toEqual(1);
  });
});

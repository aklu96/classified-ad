interface Cheese {
  [cheeseName: string]: string | {
    [sub: string]: number;
  };
}

const obj: Cheese = {
  cheese: 'cheese',
  sub: {
    blub: 0
  }
}

const { sub } = obj;
sub['sub'] = 3;
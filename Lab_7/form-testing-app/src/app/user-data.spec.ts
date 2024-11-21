import { UserData } from './user-data';

describe('UserData', () => {
  it('повинен створювати екземпляр класу', () => {
    const userData = new UserData();
    expect(userData).toBeTruthy();
  });

  it('повинен мати порожнє значення для властивостей за замовчуванням', () => {
    const userData = new UserData();
    expect(userData.fullName).toBe('');
    expect(userData.username).toBe('');
    expect(userData.gender).toBe('');
    expect(userData.birthDate).toBe('');
    expect(userData.email).toBe('');
    expect(userData.website).toBe('');
    expect(userData.creditCard).toBe('');
    expect(userData.phone).toBe('');
    expect(userData.message).toBe('');
  });

  it('повинен дозволяти змінювати значення властивостей', () => {
    const userData = new UserData();
    userData.fullName = 'Іван Іванов';
    userData.username = 'Ivan123';
    userData.gender = 'М';
    userData.birthDate = '1990-01-01';
    userData.email = 'ivan@example.com';
    userData.website = 'http://example.com';
    userData.creditCard = '1234-5678-1234-5678';
    userData.phone = '+380123456789';
    userData.message = 'Hello, this is a test message';

    expect(userData.fullName).toBe('Іван Іванов');
    expect(userData.username).toBe('Ivan123');
    expect(userData.gender).toBe('М');
    expect(userData.birthDate).toBe('1990-01-01');
    expect(userData.email).toBe('ivan@example.com');
    expect(userData.website).toBe('http://example.com');
    expect(userData.creditCard).toBe('1234-5678-1234-5678');
    expect(userData.phone).toBe('+380123456789');
    expect(userData.message).toBe('Hello, this is a test message');
  });

  it('повинен створювати унікальні екземпляри', () => {
    const userData1 = new UserData();
    const userData2 = new UserData();
    userData1.fullName = 'Іван Іванов';
    userData2.fullName = 'Петро Петров';

    expect(userData1.fullName).not.toBe(userData2.fullName);
  });

  it('повинен мати коректні типи даних для властивостей', () => {
    const userData = new UserData();

    expect(typeof userData.fullName).toBe('string');
    expect(typeof userData.username).toBe('string');
    expect(typeof userData.gender).toBe('string');
    expect(typeof userData.birthDate).toBe('string');
    expect(typeof userData.email).toBe('string');
    expect(typeof userData.website).toBe('string');
    expect(typeof userData.creditCard).toBe('string');
    expect(typeof userData.phone).toBe('string');
    expect(typeof userData.message).toBe('string');
  });
});

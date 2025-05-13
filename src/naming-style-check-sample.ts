const userName = 'Alice';
function fetchUserData() {}

const UserName = 'Bob';
function get_user_data() {}

// ✅ PascalCase for classes
class UserService {
  userId: number;

  getName() {
    return 'User';
  }
}

class userService {}
class login_manager {}

class BadClass {
  UserId: number;
  GetName() {
    return 'Bad';
  }
}

interface UserProfile {
  name: string;
}

interface IUser {}
interface user_profile {}

type AccountSettings = {
  theme: string;
};

namespace AppCore {
  export const version = '1.0';
}

namespace common_util {}

enum UserRole {
  Admin,
  Guest,
}

enum user_role {
  admin,
  guest,
}

const users: User[] = [];

const items: Array<Item> = [];

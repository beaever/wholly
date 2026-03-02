-- Add name and avatar_url columns to users table
ALTER TABLE users
ADD COLUMN IF NOT EXISTS name TEXT,
ADD COLUMN IF NOT EXISTS avatar_url TEXT;

-- Add comment for documentation
COMMENT ON COLUMN users.name IS 'User display name from OAuth provider (e.g., Kakao)';
COMMENT ON COLUMN users.avatar_url IS 'User profile picture URL from OAuth provider (e.g., Kakao)';

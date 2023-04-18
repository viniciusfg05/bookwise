-- DropForeignKey
ALTER TABLE `_BookToCategory` DROP FOREIGN KEY `_BookToCategory_A_fkey`;

-- DropForeignKey
ALTER TABLE `_BookToCategory` DROP FOREIGN KEY `_BookToCategory_B_fkey`;

-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `accounts_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `ratings` DROP FOREIGN KEY `ratings_book_id_fkey`;

-- DropForeignKey
ALTER TABLE `ratings` DROP FOREIGN KEY `ratings_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `sessions` DROP FOREIGN KEY `sessions_user_id_fkey`;

-- RenameIndex
ALTER TABLE `accounts` RENAME INDEX `accounts_user_id_fkey` TO `accounts_user_id_idx`;

-- RenameIndex
ALTER TABLE `ratings` RENAME INDEX `ratings_book_id_fkey` TO `ratings_book_id_idx`;

-- RenameIndex
ALTER TABLE `ratings` RENAME INDEX `ratings_user_id_fkey` TO `ratings_user_id_idx`;

-- RenameIndex
ALTER TABLE `sessions` RENAME INDEX `sessions_user_id_fkey` TO `sessions_user_id_idx`;

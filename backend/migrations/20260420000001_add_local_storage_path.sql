-- +goose Up
-- +goose StatementBegin
ALTER TABLE local_storages
    ADD COLUMN IF NOT EXISTS storage_path TEXT NOT NULL DEFAULT '';
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
ALTER TABLE local_storages
    DROP COLUMN IF EXISTS storage_path;
-- +goose StatementEnd

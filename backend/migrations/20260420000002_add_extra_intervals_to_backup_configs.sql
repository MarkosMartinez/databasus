-- +goose Up
-- +goose StatementBegin
ALTER TABLE backup_configs
    ADD COLUMN IF NOT EXISTS extra_intervals_json TEXT NOT NULL DEFAULT '';
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
ALTER TABLE backup_configs
    DROP COLUMN IF EXISTS extra_intervals_json;
-- +goose StatementEnd

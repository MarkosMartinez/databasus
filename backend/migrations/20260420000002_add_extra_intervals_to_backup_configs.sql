ALTER TABLE backup_configs
    ADD COLUMN IF NOT EXISTS extra_intervals_json TEXT NOT NULL DEFAULT '';

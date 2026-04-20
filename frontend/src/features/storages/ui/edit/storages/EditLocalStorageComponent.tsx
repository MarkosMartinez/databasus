import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import type { Storage } from '../../../../entity/storages';

interface Props {
  storage: Storage;
  setStorage: (storage: Storage) => void;
  setUnsaved: () => void;
}

export function EditLocalStorageComponent({ storage, setStorage, setUnsaved }: Props) {
  return (
    <>
      <div className="max-w-[360px] text-yellow-600 dark:text-yellow-400">
        <ExclamationCircleOutlined /> Be careful: with local storage you may run out of ROM memory.
        It is recommended to use S3 or unlimited storages
      </div>

      <div className="mb-5" />

      <div className="mb-1 flex w-full flex-col items-start sm:flex-row sm:items-center">
        <div className="mb-1 min-w-[110px] sm:mb-0">Storage path</div>

        <Input
          value={storage.localStorage?.storagePath || ''}
          onChange={(e) => {
            setStorage({
              ...storage,
              localStorage: { ...storage.localStorage, storagePath: e.target.value },
            });
            setUnsaved();
          }}
          size="small"
          className="w-full max-w-[360px]"
          placeholder="Leave empty to use default path"
        />
      </div>

      <div className="mb-1 text-xs text-gray-500 dark:text-gray-400">
        Optional. If left empty, the default data folder will be used. Use an absolute path, e.g.{' '}
        <code>/mnt/backups</code> or <code>C:\Backups</code>
      </div>
    </>
  );
}

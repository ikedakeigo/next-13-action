import { writeFile } from "fs/promises";

export default function Uplorder() {
  const addImage = async (data: FormData) => {
    'use server';

    const image = data.get('image') as File;

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const filePath = `./public/${image.name}`;

    await writeFile(filePath, buffer);
  };

  return (
    <div>
      <h1>Server Actionsでファイルのアップロード</h1>
      <form action={addImage}>
        <input type="file" name="image" />
        <button
        type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  )
}

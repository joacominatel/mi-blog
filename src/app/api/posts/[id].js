import dbConnect from "../../../../blog-api/lib/dbConnect";
import Post from "../../../../blog-api/models/postModel";

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const post = await Post.findById(id);
                
                if (!post) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: post });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'PUT':
            try {
                const post = await Post.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!post) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: post });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
    break;

    case 'DELETE':
        try {
            const deletedPost = await Post.deleteOne({ _id: id });
            if (!deletedPost) {
                return res.status(400).json({ success: false, error: error.message });
            }
            res.status(200).json({ success: true, data: `Post with id ${id} deleted successfully` });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
        break;

    default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
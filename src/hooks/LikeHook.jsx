import { postLike, postUnLike } from '../apis/like';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useChat } from '../context/ChatContext';

export const useLike = ({ tweetId, userId }) => {
  const queryClient = useQueryClient()
  const socket = useChat()
  const likeMutation = useMutation({
    mutationFn: async () => {
      return await postLike(tweetId);
    },
    onSuccess: (data) => {
      if (data.status === 'success') {
        queryClient.invalidateQueries(['getAllTweets']);
        queryClient.invalidateQueries(['getUserTweets', { id: userId }]);
        queryClient.invalidateQueries(['getUserLike', { id: userId }]);
        socket.emit('client-push-notice', 'like', userId)
      }
    },
    onError: (error) => {
      console.log(error)
    }
  })

  return {
    likeMutation
  };
}

export const useUnlike = ({ tweetId, userId }) => {
  const queryClient = useQueryClient()
  const unlikeMutation = useMutation({
    mutationFn: async () => {
      return await postUnLike(tweetId)
    },
    onSuccess: (data) => {
      if (data.status === 'success') {
        queryClient.invalidateQueries(['getAllTweets']);
        queryClient.invalidateQueries(['getUserTweets', { id: userId }]);
        queryClient.invalidateQueries(['getUserLike', { id: userId }]);
      }
    },
    onError: (error) => {
      console.log(error)
    }
  })
  return { unlikeMutation }
}